export const Layout = `
    <div  class="flex flex-col w-full h-full">
        <div class="flex flex-row items-center flex-wrap sm:flex-row gap-2">
            <h2 class="text-primary-500 font-semibold">Theme colors: </h2>
            <button class="w-auto theme-btn rounded-full px-3 py-2 flex  border flex-row items-center gap-2" data-color="indigo" ><span class="block w-2 h-2 bg-indigo-500 rounded-full"></span> Indigo</button>
            <button class="w-auto theme-btn rounded-full px-3 py-2 flex  border flex-row items-center gap-2" data-color="emerald"><span class="block w-2 h-2 bg-emerald-500 rounded-full"></span> Emerald</button>
            <button class="w-auto theme-btn rounded-full px-3 py-2 flex  border flex-row items-center gap-2" data-color="gray"><span class="block w-2 h-2 bg-gray-500 rounded-full"></span> Default</button>
            <button class="w-auto theme-btn rounded-full px-3 py-2 flex  border flex-row items-center gap-2" data-color="amber"><span class="block w-2 h-2 bg-amber-500 rounded-full"></span> Amber</button>
            <button class="w-auto theme-btn rounded-full px-3 py-2 flex  border flex-row items-center gap-2" data-color="teal"><span class="block w-2 h-2 bg-teal-500 rounded-full"></span> Teal</button>
            <button class="w-auto theme-btn rounded-full px-3 py-2 flex  border flex-row items-center gap-2" data-color="blue"><span class="block w-2 h-2 bg-blue-500 rounded-full"></span> Blue</button>
            <button class="w-auto theme-btn rounded-full px-3 py-2 flex  border flex-row items-center gap-2" data-color="violet"><span class="block w-2 h-2 bg-violet-500 rounded-full"></span> Violet</button>
        </div>
        <div id="main"></div>
    </div>
`;