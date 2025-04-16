import { useRouter } from 'next/router';
import React from 'react';
import Head from 'next/head';

export default function Custom404() {
  const router = useRouter();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Head>
        <title>404 - 页面未找到</title>
      </Head>
      <div className="text-center p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-red-500 mb-4">
          404 - 页面未找到
        </h1>
        <p className="text-gray-600 mb-6">
          您访问的页面不存在或已被移除
        </p>
        <button 
          onClick={() => router.push('/')}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          返回首页
        </button>
      </div>
    </div>
  );
} 