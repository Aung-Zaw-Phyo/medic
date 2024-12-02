"use client";

import React, { useState } from 'react'
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog';

const items = [
    {
        id: 1,
        name: 'BioBone',
        price: '7800 MMK',
        image: 'https://preview.colorlib.com/theme/pharma/images/product_03.png.webp',
        type: 'child',
        description: 'BioBoneသည် အရိုးအဆစ်များ ကျန်းမာသန်စွမ်းရေးနှင့် အရိုးများ ကြီးထွားရေးအတွက် မရှိမဖြစ်လိုအပ်တဲ့ ဗီတာမင်တွေပါ၀င်ပြီး အရိုးကျန်းမာရေးကို ထိန်းသိမ်းပေးကာ အရိုးကျိုးနိုင်ချေကို လျှော့ချပေးပါသည်။ ကြံ့ခိုင်သော အရိုးကြီးထွားမှုနဲ့အတူ ကျန်းမာတဲ့ အရိုးအလှည့်အပြောင်းကို ပံ့ပိုးပေးပါသည်။ အရိုးကျန်းမာရေးနဲ့သက်ဆိုင်တဲ့ အာဟာရဓာတ်များကို ပံ့ပိုးပေးသည်။ ဒူးနာခြင်း၊ ဒူးအဆစ် ရောင်ရမ်းခြင်း၊ နာတာရှည် ဒူးခေါင်း ထိခိုက်ဒဏ်ရာ ဖြစ်နေခြင်း၊ ဒူးအကွေးအဆန့် လုပ်မရခြင်း၊ လမ်းမလျှောက်နိုင်ခြင်းတို့ အတွက် အထူး စီမံဖော်စပ်ထားပါသည်။',
        usage: 'အစာနှင့်တွဲ၍ တစ်နေ့တစ်လုံး ပုံမှန်သောက်သုံးနိုင်ပါသည် သို့မဟုတ် ဆရာဝန်ညွှန်ကြားချက်အတိုင်း သောက်သုံးနိုင်ပါသည်။',
    },
    {
        id: 2,
        name: 'FLU-BOMB',
        price: '12000 MMK',
        image: 'https://preview.colorlib.com/theme/pharma/images/product_04.png.webp',
        type: 'men',
        description: 'ခန္ဓာကိုယ်ခုခံအားကောင်းစေပြီး နှာစေးခြင်း၊ ချောင်းဆိုးခြင်း၊ တုပ်ကွေးဖြစ်ခြင်း၊ အအေးပတ်ခြင်းနှင့် အဖျားရောဂါများအတွက် အသုံးပြုနိုင်ပါသည်။',
        usage: 'အစာစားပြီးတိုင်း ဆေးတစ်တောင့် (သို့) နှစ်တောင့် သောက်သုံးနိုင်ပါသည်။',
    },
    {
        id: 3,
        name: 'VitaFiT',
        price: '9000 MMK',
        image: 'https://preview.colorlib.com/theme/pharma/images/product_05.png.webp',
        type: 'men',
        description: 'VitaFitတွင် ပါ၀င်သော ဗီတာမင် C နှင့် ကယ်လ်စီယမ် နှစ်မျိုးလုံးသည် ကလေးငယ်များရဲ့ ကိုယ်ခံအားကို မြှင့်တင်ပေးပြီး အရိုးများကို ကျန်းမာသန်စွမ်းစေပါသည်။ ဦးနှောက်ဉာဏ်ရည်ကို ဖွံ့ဖြိုးစေပါတယ်။ အစာ စားချင်စိတ်ကို ဖြစ်ပေါ်စေပြီး အချိန်မှန် အိပ်စေပါတယ်။ VitaFITကို ကလေးငယ်များသာမက လူလတ်ပိုင်း၊ လူကြီးပိုင်းတွေအထိ ခန္ဓာကိုယ် သန်မာဝဖြိုးလာစေရန် အသုံးပြုနိုင်ပါသေးတယ်။',
        usage: 'အသက် တစ်နှစ်မှ ငါးနှစ်-တစ်နေ့လျှင် 5ml ။ အသက်ငါးနှစ်အထက်-တစ်နေ့လျှင် 7.5ml ။ လူကြီးများ-တစ်နေ့လျှင် 15ml အသုံးမပြုမီ ဆေးပုလင်းကို လှူပ်၍သောက်သုံးပါ။',
    },
    {
        id: 4,
        name: 'Nutro Shine Syrup',
        price: '16200 MMK',
        image: 'https://preview.colorlib.com/theme/pharma/images/product_06.png.webp',
        type: 'child',
        description: 'ခန္ဓာကိုယ်ဖွံ့ဖြိုးမှူအတွက် လိုအပ်သော Peptone တို့ကို အချိုးကျ ပေါင်းစပ်ထားသောကြောင့် အအိပ်ပျက် အစားပျက်ဖြစ်နေသော ကလေးသူငယ်များအတွက် အထူးသင့်လျော်သော အားဆေးရည် ဖြစ်ပါသည်။',
        usage: 'တစ်ခါသောက်လျှင် ထမင်းစားဇွန်း(၁)ဇွန်း (၁၅မီလီမီတာ) တစ်နေ့တစ်ကြိမ် (သို့) ဆရာဝန်ညွှန်ကြားချက်အတိုင်း သောက်သုံးပါ။',
    },
    {
        id: 5,
        name: 'Nutrovit C',
        price: '5000 MMK',
        image: 'https://preview.colorlib.com/theme/pharma/images/product_01.png.webp',
        type: 'child',
        description: 'Vitamin C 500mg ပါ၀င်တဲ့ Nutrovit C ဟာ Acid free ဖြစ်ပြီး Calcium Ascorbate C အမျိုးအစားဖြစ်တာကြောင့် ဗိုက်လုံးဝမနာဘဲ အစာအိမ်ထိခိုက်ခြင်းမှ ကင်းဝေးစေပါတယ်။',
        usage: 'တစ်နေ့တစ်လုံး အစာစားပြီး သောက်သုံးပါ။',
    },
    {
        id: 6,
        name: 'OMEGA 3-6-9',
        price: '19000 MMK',
        image: 'https://preview.colorlib.com/theme/pharma/images/product_02.png.webp',
        type: 'men',
        description: 'နှလုံးသွေးကြောကျဉ်းခြင်းနှင့် ဦးနှောက်ကျန်းမာရေးကို ထောက်ပံ့ပေးပါတယ်။ သွေးဖိအားကိုလျှော့ချပေးတယ်။ ပုံမှန်မဟုတ်သော နှလုံးခုန်နှုန်းကိုလျှော့ချပေးတယ်။ နှလုံးရောဂါနဲ့ လေဖြတ်နိုင်ချေကို လျှော့ချပေးတယ်။ နှလုံးရောဂါရှိသူများတွင် ရုတ်တရက် နှလုံးသေဆုံးနိုင်ခြေကို လျှော့နည်းစေပါတယ်။',
        usage: 'တစ်နေ့လျှင် ဆေး (၁)လုံး သို့မဟုတ် (၂)လုံး အစာစားပြီးတိုင်း သောက်သုံးနိုင်ပါသည်။ သို့မဟုတ် ဆရာဝန်ညွှန်ကြားချက်အတိုင်း သောက်သုံးနိုင်ပါသည်။',
    },
    {
        id: 7,
        name: 'OMEGA-3',
        price: '19000 MMK',
        image: 'https://preview.colorlib.com/theme/pharma/images/product_02.png.webp',
        type: 'men',
        description: 'Omega-3ဟာ နှလုံးရောဂါ (နှလုံးအဆီဖုံးခြင်း၊ နှလုံးသွေးကြောကျဥ်းခြင်း) ကို ကာကွယ်ပေးနိုင်ခြင်း။ လေဖြတ်ခြင်းကို ကာကွယ်ပေးခြင်း။ အရိုးအဆစ်များ ရောင်ရမ်းကိုက်ခဲခြင်းကို သက်သာစေခြင်း။ ဦးနှောက်နှင့် မျက်စိအာရုံကြောများကို ကောင်းမွန်စေခြင်း။အသားရည် စိုပြေလှပစေခြင်း။ ခန္ဓာကိုယ်အတွက် မကောင်းသော ကိုလက်စထရောများကို လျှော့ချပေးတို့ကို လုပ်ဆောင်ပေးပါသည်။',
        usage: 'တစ်နေ့လျှင် ဆေး (၁)လုံး သို့မဟုတ် (၂)လုံး အစာစားပြီးတိုင်း သောက်သုံးနိုင်ပါသည်။ သို့မဟုတ် ဆရာဝန်ညွှန်ကြားချက်အတိုင်း သောက်သုံးနိုင်ပါသည်။',
    },
    {
        id: 8,
        name: 'Best Sleep',
        price: '19000 MMK',
        image: 'https://preview.colorlib.com/theme/pharma/images/product_02.png.webp',
        type: 'child',
        description: 'Best Sleep Formulaသည် အိပ်ရေး၀၀အိပ်ပျော်နိုင်ရန်နှင့် အိပ်ယာမှ နိုးထသည့်အခါ လန်းဆန်းနေခြင်းတိုကို အကူအညီပေးပါသည်။',
        usage: 'အိပ်ယာ မဝင်မီ တစ်နာရီအလို ဆေး(၁)လုံး သောက်နိုင်ပါသည်။ သို့မဟုတ် ဆရာဝန်ညွှန်ကြားချက်အတိုင်း သောက်သုံးနိုင်ပါသည်။',
    },
];

const Medicines = () => {
    const [isOpenDialog, setIsOpenDialog] = useState(false);
    const [selectedData, setSelectedData] = useState(null);
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const paramValue = searchParams.get("type");

    let medicines = items;

    if(paramValue == 'child') {
        medicines = items.filter(item => item.type == 'child')
    }
    if(paramValue == 'men') {
        medicines = items.filter(item => item.type == 'men')
    }

    const filter = (type) => {
        if(!type) {
            router.push(pathname, {scroll: false})
            return;
        }
        const params = new URLSearchParams(searchParams, {});
        params.set("type", type)
        const paramsString = params.toString()
        router.push(pathname + '?' + paramsString.replace(/%2C/g, ","), {
            scroll: false,
        })
    }

    const showDialog = (data) => {
        setIsOpenDialog(true);
        setSelectedData(data)
        console.log(data)
    }

  return (
    <div>
        <div className="py-6 container" id='medicine'>
            <h1 className="text-2xl font-semibold uppercase text-center mb-6">ဆေးများ</h1>
            <div className='mb-3'>
                <div className="flex flex-wrap justify-center items-center gap-3">
                    <Button variant='outline' onClick={filter.bind(null, null)}>ဆေးအားလုံး</Button>
                    <Button variant='outline' onClick={filter.bind(null, 'child')}>ကလေးအားတိုးဆေးများ</Button>
                    <Button variant='outline' onClick={filter.bind(null, 'men')}>လူကြီးအားတိုးဆေးများ</Button>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-12">
                {
                    medicines.map((medicine) => (
                        <div key={medicine.id} className="flex flex-col justify-center items-center">
                            <img
                                src={medicine.image}
                            />
                            <p className="mb-1 font-medium">{medicine.name}</p>
                            <p className='mb-3'>{medicine.price}</p>
                            <Button variant='outline' onClick={showDialog.bind(null, medicine)}>ဆေးအာနိသင်ကြည့်ရန်</Button>
                        </div>
                    ))
                }
            </div>
        </div>
        <Dialog open={isOpenDialog} onOpenChange={setIsOpenDialog}>
            <DialogContent className='max-w-[90%] sm:max-w-[70%] md:max-w-[50%] lg:max-w-[30%] rounded-md mx-auto'>
                <DialogHeader>
                    <DialogTitle>{selectedData ? selectedData.name : null}</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    <div className='mb-4 leading-7'>
                        {selectedData ? selectedData.description : null}
                    </div>
                    <div className='leading-7'>
                        <div className="mb-2 font-semibold">အသုံးပြုပုံအညွှန်း</div>
                        <div>
                        {selectedData ? selectedData.usage : null}
                        </div>
                    </div>
                </DialogDescription>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default Medicines