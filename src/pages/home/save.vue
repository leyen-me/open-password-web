<template>
    <form class="p-12" @submit.prevent="handleSave">
        <div class="space-y-12">
            <div class="border-b border-gray-900/10 pb-12">
                <h2 class="text-base font-semibold leading-7 text-gray-900">{{ pwdForm.id ? '修改密码' : '新增密码' }}</h2>
                <p class="mt-1 text-sm leading-6 text-gray-600">{{ pwdForm.id ? 'Update' : 'New' }} Password</p>
                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div class="sm:col-span-4">
                        <label for="username" class="block text-sm font-medium leading-6 text-gray-900">平台</label>
                        <div class="mt-2">
                            <div
                                class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                                <input v-model="pwdForm.platform" type="text" autocomplete="off"
                                    class="block flex-1 border-0 bg-transparent py-4 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    placeholder="平台" />
                            </div>
                        </div>
                    </div>
                    <div class="sm:col-span-4">
                        <label for="username" class="block text-sm font-medium leading-6 text-gray-900">账号</label>
                        <div class="mt-2">
                            <div
                                class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                                <input v-model="pwdForm.account" type="text" autocomplete="off"
                                    class="block flex-1 border-0 bg-transparent py-4 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    placeholder="账号" />
                            </div>
                        </div>
                    </div>
                    <div class="sm:col-span-4">
                        <label for="username" class="block text-sm font-medium leading-6 text-gray-900">密码</label>
                        <div class="mt-2">
                            <div
                                class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                                <input v-model="pwdForm.password" :type="show ? 'text' : 'password'" autocomplete="off"
                                    class="block flex-1 border-0 bg-transparent py-4 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                    placeholder="密码" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" class="text-sm font-semibold leading-6 text-gray-900"
                @click="router.back()">返回</button>
            <button type="submit"
                class="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">保存</button>
        </div>
    </form>
    <div
        class="fixed inset-x-0 bottom-0 flex flex-col justify-between gap-x-8 gap-y-4 bg-white p-6 ring-1 ring-gray-900/10 md:flex-row md:items-center lg:px-8">
        <p class="max-w-4xl text-sm leading-6 text-gray-900">You can do some operations. You can show or remove this
            password</p>
        <div class="flex flex-none items-center gap-x-5 justify-end">
            <button type="button"
                class="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                @click="show = !show">{{ show ? '隐藏密码' : '显示密码' }}</button>
            <button v-if="pwdForm.id" type="button" class="text-sm font-semibold leading-6 text-red-500"
                @click="handleDelete">删除密码</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from "vue-router";
import { usePwdInfoApi, usePwdSaveApi, usePwdDeleteApi } from "@/api/pwd";
import { ElMessage, ElMessageBox } from 'element-plus'

const route = useRoute()
const router = useRouter()

const show = ref(false)
const pwdForm = ref({
    id: route.params.id === "0" ? "" : route.params.id,
    platform: "",
    account: "",
    password: "",
})


if (pwdForm.value.id) {
    usePwdInfoApi(pwdForm.value.id).then((res) => {
        pwdForm.value.platform = res.data.platform
        pwdForm.value.account = res.data.account
        pwdForm.value.password = res.data.password
    })
}

const handleSave = () => {
    usePwdSaveApi(pwdForm.value).then((res) => {
        ElMessage.success("保存成功")
        router.back()
    }).catch(() => {
        ElMessage.error("保存失败")
    })
}

const handleDelete = () => {
    ElMessageBox.confirm('确定进行删除操作?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    })
        .then(() => {
            usePwdDeleteApi(pwdForm.value.id).then(() => {
                ElMessage.success('删除成功')
                router.back()
            })
        })
        .catch(() => {
        })
}
</script>