import { BoxProps, Input, VStack } from '@chakra-ui/react'

import { UseFormReturn } from 'react-hook-form'

import FormHelper from '@/components/FormHelper'
import { ExampleFormDataType } from '@/hooks/useExampleForm'

interface FormProps extends BoxProps {
  data?: ExampleFormDataType
  formData: UseFormReturn<ExampleFormDataType>
}

export const FormView = ({
  formData: {
    register,
    formState: { errors },
  },
  ...basisProps
}: FormProps) => {
  return (
    <VStack w={'100%'} spacing="20px" my="24px" {...basisProps}>
      {/* ID 필드 */}
      <FormHelper
        label="ID"
        isRequired
        message={{ help: 'ID를 입력해주세요', error: errors.id?.message }}
      >
        <Input
          {...register('id')}
          placeholder="ID를 입력해주세요"
          isInvalid={!!errors.id}
        />
      </FormHelper>

      {/* 비밀번호 필드 */}
      <FormHelper
        label="Password"
        isRequired
        message={{
          help: '비밀번호를 입력해주세요',
          error: errors.password?.message,
        }}
      >
        <Input
          {...register('password')}
          type="password"
          isRequired
          placeholder="비밀번호를 입력해주세요"
          isInvalid={!!errors.password}
        />
      </FormHelper>

      {/* 비밀번호 확인 필드 */}
      <FormHelper
        label="Password Confirm"
        isRequired
        message={{
          help: '비밀번호를 다시 입력해주세요',
          error: errors.passwordConfirm?.message,
        }}
      >
        <Input
          {...register('passwordConfirm')}
          type="password"
          placeholder="비밀번호 확인"
          isInvalid={!!errors.passwordConfirm}
        />
      </FormHelper>

      {/* 닉네임 필드 */}
      <FormHelper
        label="Nickname"
        isRequired
        message={{
          help: '닉네임을 입력해주세요',
          error: errors.nickname?.message,
        }}
      >
        <Input
          {...register('nickname')}
          placeholder="닉네임을 입력해주세요"
          isInvalid={!!errors.nickname}
        />
      </FormHelper>

      {/* 이메일 필드 */}
      <FormHelper
        label="Email"
        message={{
          help: '이메일을 입력해주세요',
          error: errors.email?.message,
        }}
      >
        <Input
          {...register('email')}
          placeholder="이메일을 입력해주세요"
          isInvalid={!!errors.email}
        />
      </FormHelper>

      {/* 이메일 인증번호 필드 */}
      <FormHelper
        label="Email Verification Code"
        message={{
          help: '이메일 인증번호를 입력해주세요',
          error: errors.emailVerificationCode?.message,
        }}
      >
        <Input
          {...register('emailVerificationCode')}
          placeholder="이메일 인증번호"
          isInvalid={!!errors.emailVerificationCode}
        />
      </FormHelper>

      {/* 핸드폰 번호 필드 */}
      <FormHelper
        label="Phone"
        message={{
          help: '핸드폰 번호를 입력해주세요',
          error: errors.phone?.message,
        }}
      >
        <Input
          {...register('phone')}
          placeholder="핸드폰 번호를 입력해주세요"
          isInvalid={!!errors.phone}
        />
      </FormHelper>

      {/* 핸드폰 인증번호 필드 */}
      <FormHelper
        label="Phone Verification Code"
        message={{
          help: '핸드폰 인증번호를 입력해주세요',
          error: errors.phoneVerificationCode?.message,
        }}
      >
        <Input
          {...register('phoneVerificationCode')}
          placeholder="핸드폰 인증번호"
          isInvalid={!!errors.phoneVerificationCode}
        />
      </FormHelper>

      {/* 생년월일 필드 */}
      <FormHelper
        label="Birthdate"
        message={{
          help: '생년월일을 입력해주세요',
          error: errors.birthdate?.message,
        }}
      >
        <Input
          {...register('birthdate')}
          placeholder="생년월일을 입력해주세요"
          isInvalid={!!errors.birthdate}
        />
      </FormHelper>

      {/* 우편번호 필드 */}
      <FormHelper
        label="Postcode"
        message={{
          help: '우편번호를 입력해주세요',
          error: errors.postcode?.message,
        }}
      >
        <Input
          {...register('postcode')}
          placeholder="우편번호를 입력해주세요"
          isInvalid={!!errors.postcode}
        />
      </FormHelper>

      {/* 기본 주소 필드 */}
      <FormHelper
        label="Address Main"
        message={{
          help: '기본 주소를 입력해주세요',
          error: errors.addressMain?.message,
        }}
      >
        <Input
          {...register('addressMain')}
          placeholder="기본 주소를 입력해주세요"
          isInvalid={!!errors.addressMain}
        />
      </FormHelper>

      {/* 상세 주소 필드 */}
      <FormHelper
        label="Address Detail"
        message={{
          help: '상세 주소를 입력해주세요',
          error: errors.addressDetail?.message,
        }}
      >
        <Input
          {...register('addressDetail')}
          placeholder="상세 주소를 입력해주세요"
          isInvalid={!!errors.addressDetail}
        />
      </FormHelper>

      {/* 도시 필드 */}
      <FormHelper
        label="City"
        message={{ help: '도시를 입력해주세요', error: errors.city?.message }}
      >
        <Input
          {...register('city')}
          placeholder="도시를 입력해주세요"
          isInvalid={!!errors.city}
        />
      </FormHelper>

      {/* 주/지역 필드 */}
      <FormHelper
        label="Region"
        message={{
          help: '주/지역을 입력해주세요',
          error: errors.region?.message,
        }}
      >
        <Input
          {...register('region')}
          placeholder="주/지역을 입력해주세요"
          isInvalid={!!errors.region}
        />
      </FormHelper>

      {/* 사용자 이름 필드 */}
      <FormHelper
        label="Username"
        message={{
          help: '사용자 이름을 입력해주세요',
          error: errors.username?.message,
        }}
      >
        <Input
          {...register('username')}
          placeholder="사용자 이름을 입력해주세요"
          isInvalid={!!errors.username}
        />
      </FormHelper>

      {/* 이름 필드 */}
      <FormHelper
        label="First Name"
        message={{
          help: '이름을 입력해주세요',
          error: errors.firstName?.message,
        }}
      >
        <Input
          {...register('firstName')}
          placeholder="이름을 입력해주세요"
          isInvalid={!!errors.firstName}
        />
      </FormHelper>

      {/* 성 필드 */}
      <FormHelper
        label="Last Name"
        message={{ help: '성을 입력해주세요', error: errors.lastName?.message }}
      >
        <Input
          {...register('lastName')}
          placeholder="성을 입력해주세요"
          isInvalid={!!errors.lastName}
        />
      </FormHelper>
    </VStack>
  )
}
