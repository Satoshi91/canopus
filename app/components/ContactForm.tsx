'use client';

import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // ここで送信処理を実装
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-gray-700 font-medium mb-2"
        >
          名前（必須入力）
        </label>
        <input
          type="text"
          id="name"
          {...register('name', {
            required: '名前は必須です',
          })}
          className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
          placeholder="山田 太郎"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white px-8 py-4 rounded-2xl hover:bg-blue-600 transition-all transform hover:scale-105 text-lg font-medium"
      >
        送信する
      </button>
    </form>
  );
}

