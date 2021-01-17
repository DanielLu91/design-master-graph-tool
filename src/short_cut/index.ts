import * as Mousetrap from 'mousetrap';
import { App } from '../app/app';

export const registerShortCut = () => {
    Mousetrap.bind('ctrl+v', async () => {
        const content = await (navigator as any).clipboard.readText();
        try {
            const data = JSON.parse(content);
            App.getInstance().readData(data);
        } catch {
            window.alert('数据错误');
        }
    });
}