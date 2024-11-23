"use client";

import React, { useState } from 'react'
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog';

const items = [
    {
        id: 1,
        name: 'Umcka Cold Care',
        price: '7800 MMK',
        image: 'https://preview.colorlib.com/theme/pharma/images/product_03.png.webp',
        type: 'child',
    },
    {
        id: 2,
        name: 'Cetyl Pure',
        price: '12000 MMK',
        image: 'https://preview.colorlib.com/theme/pharma/images/product_04.png.webp',
        type: 'men',
    },
    {
        id: 3,
        name: 'CLA Core',
        price: '9000 MMK',
        image: 'https://preview.colorlib.com/theme/pharma/images/product_05.png.webp',
        type: 'men',
    },
    {
        id: 4,
        name: 'Poo Pourri',
        price: '16200 MMK',
        image: 'https://preview.colorlib.com/theme/pharma/images/product_06.png.webp',
        type: 'child',
    },
    {
        id: 5,
        name: 'Bioderma',
        price: '5000 MMK',
        image: 'https://preview.colorlib.com/theme/pharma/images/product_01.png.webp',
        type: 'child',
    },
    {
        id: 6,
        name: 'Chanca Piedra',
        price: '19000 MMK',
        image: 'https://preview.colorlib.com/theme/pharma/images/product_02.png.webp',
        type: 'child',
    },
];

const Medicines = () => {
    const [isOpenDialog, setIsOpenDialog] = useState(false);
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

    const showDialog = () => {
        setIsOpenDialog(true);
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
                            <Button variant='outline' onClick={showDialog}>ဆေးအာနိသင်ကြည့်ရန်</Button>
                        </div>
                    ))
                }
            </div>
        </div>
        <Dialog open={isOpenDialog} onOpenChange={setIsOpenDialog}>
            <DialogContent className='max-w-[90%] sm:max-w-[70%] md:max-w-[50%] lg:max-w-[30%] rounded-md mx-auto'>
                <DialogHeader>
                    <DialogTitle>Consectetur Adipisicing</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    It amet consectetur adipisicing elit. Facere perspiciatis eum earum optio sit voluptate laborum! Asperiores autem cum numquam possimus deleniti eos? Reprehenderit velit, corrupti assumenda harum cupiditate at.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere perspiciatis eum earum optio sit voluptate laborum! Asperiores autem cum numquam possimus deleniti eos? Reprehenderit velit, corrupti assumenda harum cupiditate at.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere perspiciatis eum earum optio sit voluptate laborum! Asperiores autem cum numquam possimus deleniti eos? Reprehenderit velit, corrupti assumenda harum cupiditate at.
                </DialogDescription>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default Medicines