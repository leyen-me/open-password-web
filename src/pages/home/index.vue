<template>
    <div class="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
        <div class="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
            <div class="ml-4 mt-4">
                <h3 class="text-base font-semibold leading-6 text-gray-900">OPENPASSWORD</h3>
                <p class="mt-1 text-sm text-gray-500">open source free personal password manager</p>
            </div>
            <div class="ml-4 mt-4 flex-shrink-0">
                <button type="button" @click="handleAddPassword"
                    class="relative inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">创建一个新的密码</button>
            </div>
        </div>
    </div>
    <ul role="list" class="px-8 py-12 pt-0 divide-y divide-gray-100">
        <VueDraggable ref="el" v-model="pwdList" :onEnd="handleSort">
            <li v-for="pwd in pwdList" :key="pwd.id"
                class="relative flex justify-between gap-x-6 py-5 border-b border-gray-200"
                @click.stop="router.push('/save/' + pwd.id)">
                <div class="flex min-w-0 gap-x-4">
                    <div class="h-12 w-12 rounded-full bg-gray-50 flex justify-center items-center uppercase">
                        {{ pwd.platform && pwd.platform[0] }}
                    </div>
                    <div class="min-w-0 flex-auto">
                        <p class="text-sm font-semibold leading-6 text-gray-900">
                        <p>
                            <span class="absolute inset-x-0 -top-px bottom-0" />
                            {{ pwd.platform }}
                        </p>
                        </p>
                        <p class="mt-1 flex text-xs leading-5 text-gray-500">
                        <p href="" class="relative truncate hover:underline">{{ pwd.account }}</p>
                        </p>
                    </div>
                </div>
                <div class="flex shrink-0 items-center gap-x-4">
                    <div class="hidden sm:flex sm:flex-col sm:items-end">
                        <p class="text-sm leading-6 text-gray-900">时间</p>
                        <p class="mt-1 text-xs leading-5 text-gray-500">
                            <time :datetime="pwd.create_time">{{ pwd.create_time }}</time>
                        </p>
                    </div>
                    <ChevronRightIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                </div>
            </li>
        </VueDraggable>
    </ul>
</template>

<script setup>
import { ref } from 'vue'

import { ChevronRightIcon } from '@heroicons/vue/20/solid'
import { usePwdListApi, usePwdSortApi } from '@/api/pwd'
import { useRouter } from "vue-router";
import { VueDraggable } from 'vue-draggable-plus'

const router = useRouter()

const pwdList = ref([])


const handleAddPassword = () => {
    router.push("/save/0")
}

const handleSort = () => {
    usePwdSortApi(pwdList.value.map(pwd => pwd.id))
}

usePwdListApi().then(res => {
    pwdList.value = res.data
})
</script>
