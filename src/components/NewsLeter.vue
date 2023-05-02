<template>
    <section class="object-top overflow-hidden bg-gray-100 bg-cover">
        <div>
            <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
                <div class="px-6 py-6 bg-pink-500 shadow-lg rounded-3xl md:py-12 md:px-12 lg:px-16 xl:flex xl:items-center">
                    <div class="xl:w-0 xl:flex-1">

                        <p class="text-5xl tracking-tighter text-white font-black">
                            Subscribe Newsletter
                        </p>
                        <p class="max-w-3xl mt-3 text-lg leading-6 text-white">
                            Sign up for our newsletter to stay up to date.
                        </p>
                    </div>
                    <div class="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
                        <form class="flex flex-col items-center justify-center max-w-sm mx-auto" action="">
                            <div class="flex flex-col w-full gap-1 mt-3 sm:flex-row">
                                <input name="email" type="email" class="block w-full px-4 py-2 text-sm font-medium text-white placeholder-gray-400 bg-white border border-gray-300 rounded-full font-spline focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600/50 disabled:opacity-50"
                                    placeholder="Enter your email..." required><button type="button"
                                    class="items-center inline-flex  justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-teal-500 border-2 border-teal-600 rounded-full   hover:border-white hover:text-white hover:scale-105 focus:outline-none lg:w-auto focus-visible:outline-white text-sm focus-visible:ring-white">
                                    <div style="position: relative"></div>
                                    Subscribe<!-- -->
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-4 h-auto ml-2">
                                        <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"></path>
                                    </svg>
                                </button>
                            </div>
                        </form>
                        <div class="justify-center mx-auto sm:max-w-lg sm:flex">
                            <p class="mt-6 text-xs text-white">
                                By subscribing, you agree with Unwrapped’s
                                <a class="text-blue-600 hover:text-black unerline" target="_blank" href="#">Terms of Service</a>
                                and
                                <a class="text-blue-600 hover:text-black" target="_blank" href="#">Privacy Policy</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>