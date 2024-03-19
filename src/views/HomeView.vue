<script setup>

</script>

<template>
  <div class="flex min-h-full flex-1">
    <div class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <img class="h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
          <h2 class="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">登录你的账号</h2>
          <p class="mt-2 text-sm leading-6 text-gray-500">
            没有账号?
            {{ ' ' }}
            <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">注册</a>
          </p>
        </div>

        <div class="mt-10">
          <div>
            <form class="space-y-6">
              <div>
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">邮箱</label>
                <div class="mt-2">
                  <input id="email" name="email" type="email" autocomplete="email" required="" class="p-4 block w-full rounded-md border-0 py-4 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div>
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">主密码</label>
                <div class="mt-2">
                  <input id="password" name="password" type="password" autocomplete="current-password" required="" class="p-4 block w-full rounded-md border-0 py-4 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                </div>
                <div class="text-sm leading-6">
                  <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">忘记主密码?</a>
                </div>
              </div>
              <div>
                <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">登录</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="relative hidden w-0 flex-1 lg:block">
      <img class="absolute inset-0 h-full w-full object-cover" src="@/assets/images/assets-images-1.png" alt="" />
    </div>
  </div>
</template>
