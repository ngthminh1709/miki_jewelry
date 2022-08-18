import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Button from 'src/components/Button';
import { FormProviderBox, TextField } from 'src/components/hook-form';
import { useEffect, useState } from 'react';

export function RegisterFormSection() {
  const [windowWidth, setWindowWidth] = useState(undefined);
  const router = useRouter();
  // create schema validate form
  const schema = yup.object().shape({
    name: yup.string().required('Vui lòng nhập họ tên'),
    firstName: yup.string().required('Vui lòng nhập họ'),
    lastName: yup.string().required('Vui lòng nhập tên'),
    dateOfBirth: yup.string().required('Vui lòng nhập ngày sinh'),
    email: yup
      .string()
      .required('Vui lòng nhập email')
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Email không tồn tại'
      ),
    password: yup.string().trim().required('Vui lòng nhập mật khẩu').min(8, 'Nhập mật khẩu từ 6 đến 8 kí tự'),
    confirmPassword: yup
      .string()
      .trim()
      .required('Vui lòng nhập lại mật khẩu')
      .oneOf([yup.ref('password'), null], 'Mật khẩu nhập lại không khớp'),
    check: yup.array().typeError('Bạn chưa đồng ý với điều khoản').min(1, 'Bạn chưa đồng ý với điều khoản'),
  });
  // get method from react hook form
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValue: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = methods;

  // Handle Submit
  const onSubmit = (data) => {
    if (data) {
      console.log(data);
      setTimeout(() => router.push('/login'), 3000);
      reset();
    }
  };

  // Get size window to responsive
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => setWindowWidth(window.innerWidth));

      return () => window.removeEventListener('resize', () => setWindowWidth(window.innerWidth));
    }
  }, []);

  // UI
  return (
    <div>
      {windowWidth <= 375 ? (
        <FormProviderBox className={'mx-4'} methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-[32px] flex">
            <TextField
              name="name"
              styleInput="w-[204px] mr-3 h-12 p-3 rounded-lg border-border-1 border-[1px] border-solid"
              styleMessage="text-msgEr text-sm"
              placeholder="Họ và tên"
            />
            <TextField
              name="dateOfBirth"
              styleInput="w-[128px] h-12 p-3 rounded-lg border-border-1 border-[1px] border-solid"
              styleMessage="text-msgEr text-sm"
              placeholder="Năm sinh"
            />
          </div>
          <TextField
            name="email"
            styleInput="w-[343px] h-12 p-3 mt-6 rounded-lg border-solid border-border-1 border-[1px]"
            styleMessage="text-msgEr text-sm"
            placeholder="Nhập email hoặc số điện thoại"
          />
          <TextField
            name="password"
            styleInput="w-[343px] h-12 p-3 mt-6 rounded-lg border-solid border-border-1 border-[1px]"
            styleMessage="text-msgEr text-sm"
            placeholder="Nhập mật khẩu từ 6 đến 8 kí tự"
            type="password"
          />
          {/* CheckBox */}
          <div className="mt-4 flex items-center">
            <div className="w-[37px]">
              <input
                className="cursor-pointer w-6 h-6 rounded-[4px] ml-1 mr-[9px]"
                type="checkbox"
                {...register('check')}
              />
            </div>
            <label htmlFor="getEmail">Nhận thông tin khuyến mãi qua email</label>
          </div>
          <div className="text-base leading-6 mt-6 flex items-center">
            <div className="w-[37px]">
              <input
                className="cursor-pointer w-6 h-6 rounded-[4px] ml-1 mr-[9px]"
                type="checkbox"
                {...register('check')}
              />
            </div>
            <label className="text-base leading-6">
              Tôi đã đọc và đồng ý với các{' '}
              <Button text to="/" className={'font-medium'}>
                điều khoản chính sách
              </Button>{' '}
              của Miki Jewelry
            </label>
          </div>
          <span className="text-msgEr text-sm">{errors['check']?.message}</span>

          <Button
            className="mt-[32px] w-full"
            primary
            classHover="hover:bg-bgr-auth hover:border-[1px] hover:text-black duration-300 hover:border-black"
          >
            Đăng ký
          </Button>

          <div className="flex mt-4 items-center">
            <h1 className="text-sm leading-[22px] mr-1">Bạn đã có tài khoản</h1>
            <Button to="/login" text className="text-base leading-6 font-bold">
              Đăng nhập
            </Button>
          </div>
        </FormProviderBox>
      ) : (
        <FormProviderBox className={'px-10'} methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-[32px] flex">
            <TextField
              name="firstName"
              styleInput="w-[129px] mr-3 h-12 p-3 rounded-lg border-border-1 border-[1px] border-solid"
              styleMessage="text-msgEr text-sm"
              placeholder="Họ"
            />
            <TextField
              name="lastName"
              styleInput="w-[129px] mr-3 h-12 p-3 rounded-lg border-border-1 border-[1px] border-solid"
              styleMessage="text-msgEr text-sm"
              placeholder="Tên"
            />
            <TextField
              name="dateOfBirth"
              styleInput="w-[128px] h-12 p-3 rounded-lg border-border-1 border-[1px] border-solid text-xs"
              styleMessage="text-msgEr text-sm"
              placeholder="DD/MM/YY"
              type="date"
            />
          </div>
          <TextField
            name="email"
            styleInput="w-[410px] h-12 p-3 mt-6 rounded-lg border-solid border-border-1 border-[1px]"
            styleMessage="text-msgEr text-sm"
            placeholder="Nhập email hoặc số điện thoại"
          />

          <TextField
            name="password"
            styleInput="w-[410px] h-12 p-3 mt-6 rounded-lg border-solid border-border-1 border-[1px]"
            styleMessage="text-msgEr text-sm"
            placeholder="Nhập mật khẩu ít nhất 8 kí tự"
            type="password"
          />

          <TextField
            name="confirmPassword"
            styleInput="w-[410px] h-12 p-3 mt-6 rounded-lg border-solid border-border-1 border-[1px]"
            styleMessage="text-msgEr text-sm"
            placeholder="Xác thực lại mật khẩu"
            type="password"
          />

          {/* CheckBox */}
          <div className="mt-4 flex items-center">
            <div className="w-[37px]">
              <input
                className="cursor-pointer w-6 h-6 rounded-[4px] ml-1 mr-[9px]"
                type="checkbox"
                {...register('check')}
              />
            </div>
            <label htmlFor="getEmail">Nhận thông tin khuyến mãi qua email</label>
          </div>
          <div className="mt-6 flex items-center">
            <div className="w-[37px]">
              <input
                className="cursor-pointer w-6 h-6 rounded-[4px] ml-1 mr-[9px]"
                type="checkbox"
                {...register('check')}
              />
            </div>
            <label>
              Tôi đã đọc và đồng ý với các{' '}
              <Button text to="/" className={'font-medium'}>
                điều khoản chính sách
              </Button>{' '}
              của Miki Jewelry
            </label>
          </div>
          <span className="text-msgEr text-sm">{errors['check']?.message}</span>

          <Button
            className="mt-[32px] w-full "
            primary
            classHover="hover:bg-bgr-auth hover:border-[1px] hover:text-black duration-300 hover:border-black"
          >
            Đăng ký
          </Button>

          <div className="flex mt-4 items-center mb-[84px]">
            <h1 className="text-sm leading-[22px] mr-1">Bạn đã có tài khoản</h1>
            <Button to="/login" text className="text-base leading-6 font-bold">
              Đăng nhập
            </Button>
          </div>
        </FormProviderBox>
      )}
    </div>
  );
}