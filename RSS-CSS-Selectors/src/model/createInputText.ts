export function typeText(str: string): void {
    const text = [str];
    let line = 0;
    let count = 0;
    let out = '';
    function typeLine(): void {
        const interval = setTimeout(function set(): boolean | undefined {
            out += text[line][count];
            const input = <HTMLInputElement>document.querySelector('.input_code');
            input.value = out;
            count += 1;
            if (count >= text[line].length) {
                count = 0;
                line += 1;
                if (line === text.length) {
                    clearTimeout(interval);
                    return true;
                }
            }
            typeLine();
            return true;
        }, 200);
    }
    typeLine();
}

export {};
