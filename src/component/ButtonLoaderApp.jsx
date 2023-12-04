import * as React from 'react';

function ButtonLoaderApp() {
    return (
        <div class="font-[sans-serif] space-x-4 space-y-4 text-center">
            <button type="button"
                class="px-6 py-2.5 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">
                Loading
                <svg xmlns="http://www.w3.org/2000/svg" width="18px" fill="#fff" class="ml-2 inline animate-spin"
                    viewBox="0 0 24 24">
                    <path
                        d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"
                        data-original="#000000" />
                </svg>
            </button>

            <button type="button"
                class="px-6 py-2.5 text-white text-sm tracking-wider font-semibold border-none outline-none bg-purple-600 hover:bg-purple-700 active:bg-purple-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="18px" fill="#fff" class="mr-2 inline animate-spin"
                    viewBox="0 0 26.349 26.35">
                    <circle cx="13.792" cy="3.082" r="3.082" data-original="#000000" />
                    <circle cx="13.792" cy="24.501" r="1.849" data-original="#000000" />
                    <circle cx="6.219" cy="6.218" r="2.774" data-original="#000000" />
                    <circle cx="21.365" cy="21.363" r="1.541" data-original="#000000" />
                    <circle cx="3.082" cy="13.792" r="2.465" data-original="#000000" />
                    <circle cx="24.501" cy="13.791" r="1.232" data-original="#000000" />
                    <path
                        d="M4.694 19.84a2.155 2.155 0 0 0 0 3.05 2.155 2.155 0 0 0 3.05 0 2.155 2.155 0 0 0 0-3.05 2.146 2.146 0 0 0-3.05 0z"
                        data-original="#000000" />
                    <circle cx="21.364" cy="6.218" r=".924" data-original="#000000" />
                </svg>
                Loading
            </button>

            <button type="button"
                class="px-6 py-2.5 rounded-full text-white text-sm tracking-wider font-semibold border-none outline-none bg-orange-600 hover:bg-orange-700 active:bg-orange-600">
                Loading
                <svg xmlns="http://www.w3.org/2000/svg" width="18px" fill="#fff" class="ml-2 inline animate-spin"
                    viewBox="0 0 24 24">
                    <path fill-rule="evenodd"
                        d="M7.03 2.757a1 1 0 0 1 1.213-.727l4 1a1 1 0 0 1 .59 1.525l-2 3a1 1 0 0 1-1.665-1.11l.755-1.132a7.003 7.003 0 0 0-2.735 11.77 1 1 0 0 1-1.376 1.453A8.978 8.978 0 0 1 3 12a9 9 0 0 1 4.874-8l-.117-.03a1 1 0 0 1-.727-1.213zm10.092 3.017a1 1 0 0 1 1.414.038A8.973 8.973 0 0 1 21 12a9 9 0 0 1-5.068 8.098 1 1 0 0 1-.707 1.864l-3.5-1a1 1 0 0 1-.557-1.517l2-3a1 1 0 0 1 1.664 1.11l-.755 1.132a7.003 7.003 0 0 0 3.006-11.5 1 1 0 0 1 .039-1.413z"
                        clip-rule="evenodd" data-original="#000000" />
                </svg>
            </button>
        </div>
    );
}
export default ButtonLoaderApp;