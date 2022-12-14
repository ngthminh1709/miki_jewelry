import User from 'src/models/User';
import dbConnect from 'src/utils/dbConnect.js';
import withAuth from 'src/middleware/withAuth';
import withRoles from 'src/middleware/withRoles';
import { cloudinary } from 'src/utils/cloudinary.js';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb', // Set desired value here
    },
  },
};

const editUserHandler = async (req, res) => {
  await dbConnect();
  const { method } = req;
  const { id } = req.query;
  const { username, role, birthday, avatar, gender, phoneNumber } = req.body;
  switch (method) {
    case "PATCH":
      try {
        const user = await User.findById(id);

        if (!user) {
          return res.status(404).json({ success: false, message: "User not found" });
        }
        if (!avatar) {
          await User.findByIdAndUpdate(
            id,
            {
              username,
              birthday,
              gender,
              phoneNumber,
            },
            { new: true }
          );

          return res.status(201).json({
            success: true,
            message: 'User updated',
          });
        }
        const options = {
          upload_preset: 'usersAvatar',
          public_id: user._id,
          overwrite: true,
        };
        const result = await cloudinary.uploader.upload(avatar, options);

        await User.findByIdAndUpdate(
          id,
          {
            username,
            role,
            birthday,
            avatar: result.secure_url,
            gender,
            phoneNumber
          },
          { new: true }
        );

        return res.status(200).json({
          success: true,
          message: "User profile successfully uploaded!"
        });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: err });
      }
      break;
    default:
      return res.status(500).json({ success: false, message: 'Faild to connect to server' });
  }
};

export default withAuth(withRoles(editUserHandler, 'admin'));
