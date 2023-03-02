var is_dark = false;

if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
    is_dark = true;
} else {
    is_dark = false;
}

function change() {
    console.log(localStorage.theme);
    if (is_dark === true) {
        is_dark = false;
        localStorage.theme = 'light';
        document.documentElement.classList.remove('dark');
    } else {
        is_dark = true;
        localStorage.theme = 'dark';
        document.documentElement.classList.add('dark');
    }
}

export default function Lightswitch() {
    return (
        <label className="relative inline-flex cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" onChange={change} />
            <div className="w-11 h-6 bg-gray-200 dark:border-gray-600 dark:bg-gray-700 peer-checked:bg-stone-600 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-zinc-50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
        </label>
    );
}
