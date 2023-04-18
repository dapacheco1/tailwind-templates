export const Pricing = `
<button class="theme-btn" data-color="indigo" >Indigo</button>
<button class="theme-btn" data-color="emerald">Emerald</button>
<button class="theme-btn" data-color="gray">Default</button>
<button class="theme-btn" data-color="amber">Amber</button>
<button class="theme-btn" data-color="teal">Teal</button>
<button class="theme-btn" data-color="blue">Blue</button>
<button class="theme-btn" data-color="violet">Violet</button>
<div class="w-full h-full bg-secondary-100 p-4">
        <main class="w-full flex flex-col items-center gap-4">
            <section class="flex flex-col items-center">
                <h2 class="text-4xl font-bold text-primary-500">Our Pricing Plan</h2>
                <p class="text-primary-400">Our incredibles prices in our products are the best in the market</p>
                <p class="text-primary-400">Try it out and check the benefits.</p>
            </section>
            <section class="flex flex-row items-center gap-4 text-primary-400">
                <div>Monthly</div>
                <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer">
                    <div class="w-11 h-6 bg-primary-200   rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-primary-600"></div>
                  </label>
                <div>Yearly</div>
                <span class="rounded-md py-1 px-2 text-primary-500 bg-primary-200">15% off</span>
            </section>
            <div class="flex flex-col sm:flex-row gap-4 w-full">
                <section class="w-full flex flex-wrap flex-col sm:w-1/3 bg-white rounded-md shadow-md relative">
                    <div class="flex flex-row justify-between relative">
                        <div class="p-4">
                            <h2 class="text-md font-semibold text-primary-500">Basic</h2>
                            <p class="text-xs text-primary-400">Most Popular</p>
                        </div>
                        <div class="z-10 p-4">
                            <p class="text-md font-semibold text-primary-500">$6.70</p>
                            <p class="text-xs text-primary-400">Per Month</p>
                        </div>
                        <div class="absolute bg-primary-100 top-0 right-2 w-3/12 h-16 rounded-sm">
                    </div>
                    </div>
                    <section class="mt-5 p-4 flex flex-col">
                        <ul class="flex flex-col gap-2">
                            <li class="flex flex-row items-center text-primary-400 gap-3"><i class='bx bx-check-circle text-2xl'></i> <span>Unlimited updates and products</span></li>
                            <li class="flex flex-row items-center text-primary-400 gap-3"><i class='bx bx-check-circle text-2xl'></i> <span>Custom Permissions</span></li>
                            <li class="flex flex-row items-center text-primary-400 gap-3"><i class='bx bx-check-circle text-2xl'></i> <span>Custom infrastructure</span></li>
                            <li class="flex flex-row items-center text-primary-300 gap-3"><i class='bx bx-x-circle text-2xl'></i> <span>Unlimited updates and products</span></li>
                            <li class="flex flex-row items-center text-primary-300 gap-3"><i class='bx bx-x-circle text-2xl'></i> <span>Custom designs updates and features</span></li>
                            <li class="flex flex-row items-center text-primary-300 gap-3"><i class='bx bx-x-circle text-2xl'></i> <span>24 hours live support</span></li>
                        </ul>
                        <button class="self-center mt-16 text-white rounded-md px-4 py-2 text-center bg-primary-500 ">Purchase Now !</button>
                    </section>
                </section>
                <section class="w-full flex flex-wrap flex-col sm:w-1/3 bg-primary-600 rounded-md shadow-md relative">
                    <div class="flex flex-row justify-between relative">
                        <div class="p-4">
                            <h2 class="text-md font-semibold text-white">Professional</h2>
                            <p class="text-xs text-white">Recommended</p>
                        </div>
                        <div class="z-10 p-4">
                            <p class="text-md font-semibold text-white">$10.00</p>
                            <p class="text-xs text-white">Per Month</p>
                        </div>
                        <div class="absolute bg-primary-400 top-0 right-2 w-3/12 h-16 rounded-sm">
                    </div>
                    </div>
                    <section class="mt-5 p-4 flex flex-col">
                        <ul class="flex flex-col gap-2">
                            <li class="flex flex-row items-center text-white gap-3"><i class='bx bx-check-circle text-2xl'></i> <span>Unlimited updates and products</span></li>
                            <li class="flex flex-row items-center text-white gap-3"><i class='bx bx-check-circle text-2xl'></i> <span>Custom Permissions</span></li>
                            <li class="flex flex-row items-center text-white gap-3"><i class='bx bx-check-circle text-2xl'></i> <span>Custom infrastructure</span></li>
                            <li class="flex flex-row items-center text-primary-400 gap-3"><i class='bx bx-x-circle text-2xl'></i> <span>Unlimited updates and products</span></li>
                            <li class="flex flex-row items-center text-primary-400 gap-3"><i class='bx bx-x-circle text-2xl'></i> <span>Custom designs updates and features</span></li>
                            <li class="flex flex-row items-center text-white gap-3"><i class='bx bx-check-circle text-2xl'></i> <span>24 hours live support</span></li>
                        </ul>
                        <button class="self-center mt-16 text-white rounded-md px-4 py-2 text-center bg-primary-500 ">Purchase Now !</button>
                    </section>
                </section>
                <section class="w-full flex flex-wrap flex-col sm:w-1/3 bg-white rounded-md shadow-md relative">
                    <div class="flex flex-row justify-between relative">
                        <div class="p-4">
                            <h2 class="text-md font-semibold text-primary-500">Enterprise</h2>
                            <p class="text-xs text-primary-400">Most Popular</p>
                        </div>
                        <div class="z-10 p-4">
                            <p class="text-md font-semibold text-primary-500">$20.00</p>
                            <p class="text-xs text-primary-400">Per Month</p>
                        </div>
                        <div class="absolute bg-primary-100 top-0 right-2 w-3/12 h-16 rounded-sm">
                    </div>
                    </div>
                    <section class="mt-5 p-4 flex flex-col">
                        <ul class="flex flex-col gap-2">
                            <li class="flex flex-row items-center text-primary-400 gap-3"><i class='bx bx-check-circle text-2xl'></i> <span>Unlimited updates and products</span></li>
                            <li class="flex flex-row items-center text-primary-400 gap-3"><i class='bx bx-check-circle text-2xl'></i> <span>Custom Permissions</span></li>
                            <li class="flex flex-row items-center text-primary-400 gap-3"><i class='bx bx-check-circle text-2xl'></i> <span>Custom infrastructure</span></li>
                            <li class="flex flex-row items-center text-primary-400 gap-3"><i class='bx bx-check-circle text-2xl'></i> <span>Unlimited updates and products</span></li>
                            <li class="flex flex-row items-center text-primary-400 gap-3"><i class='bx bx-check-circle text-2xl'></i> <span>Custom designs updates and features</span></li>
                            <li class="flex flex-row items-center text-primary-400 gap-3"><i class='bx bx-check-circle text-2xl'></i> <span>24 hours live support</span></li>
                        </ul>
                        <button class="self-center mt-16 text-white rounded-md px-4 py-2 text-center bg-primary-500 ">Purchase Now !</button>
                    </section>
                </section>
            </div>
        </main>
    </div>
`;
