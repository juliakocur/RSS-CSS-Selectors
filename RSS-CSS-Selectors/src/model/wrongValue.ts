export function wrongValue(): void {
    setTimeout(function wr() {
        const enter = <HTMLElement>document.querySelector('.enter');
        enter.classList.remove('wrong');
    }, 1000);
}

export {};
