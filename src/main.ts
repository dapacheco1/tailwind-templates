import './style.css';
import { Pricing } from './templates/marketing/Pricing';
import { TailwindChangeThemeColor } from './utils/TailwindChangeThemeColor';
const tw = new TailwindChangeThemeColor();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = Pricing;
const btns = document.querySelectorAll('.theme-btn');
btns.forEach((it:any)=>{
  it.addEventListener('click',()=>{
    tw.changePrimaryThemeColor(it.dataset.color);
  });
});