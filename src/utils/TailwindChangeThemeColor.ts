import {tw_colors} from '../../tailwind.config';
export class TailwindChangeThemeColor{
    private _root:any;
    private _colorScales:Array<number>;
    constructor(){
        this._root = document.querySelector(':root');
        this._colorScales = [50,100,200,300,400,500,600,700,800,900,950];
        this._changeThemeColor(Object.values(tw_colors.gray));
    }

    private _changeThemeColor(themeArrayValue:Array<string>){
        if(themeArrayValue.length<11){
            throw new Error('Theme values length are less than required, you need to send 11 theme values');
        }
        themeArrayValue.forEach((color,index)=>{
            this._root.style.setProperty(`--primary-color-${this._colorScales[index]}`,`${color}`);
        });
    }

    public changePrimaryThemeColor(color:'gray' | 'emerald' | 'amber' | 'indigo' | 'teal' | 'blue' | 'violet'){
        this._changeThemeColor(Object.values(tw_colors[color]));
    }
}