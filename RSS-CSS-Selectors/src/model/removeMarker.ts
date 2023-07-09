export function removeMarkerColor<T>(x: T): void {
    (<HTMLElement>x).classList.remove('done');
    (<HTMLElement>x).classList.remove('green');
    (<HTMLElement>x).classList.remove('yellow');
}

export {};
