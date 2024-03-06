"use client"
import React, { useState } from 'react'
// import { MotorCardProps } from '@types'
import { MotorProps } from '@types'
import Image from "next/image";
import { CustomButton } from '@components';
import MotorDetails from './MotorDetails';
interface MotorCardProps {
    motor:MotorProps
}
const MotorCard = ( {motor}:MotorCardProps) => {
    const {
    make,
    model,
    year,
    type,
    displacement,
    engine,
    power,
    torque,
    compression,
    bore_stroke,
    valves_per_cylinder,
    fuel_system,
    fuel_control,
    ignition,
} = motor

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="car-card group">
            <div className="car-card__content">
                <h2 className="car-card__content-title">
                    {make} {model}
                </h2>
            </div>

            <div className='relative w-full h-40 my-3 object-contain'>
                <Image src="/orangeMotor.png" alt='motor model' fill priority className='object-contain' />
            </div>

            <div className='relative flex w-full mt-2'>
                <div className='flex group-hover:invisible w-full justify-between text-grey'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        {/* <Image src='/steering-wheel.svg' width={20} height={20} alt='steering wheel' /> */}
                        <p className='text-[14px] leading-[17px]'>
                            {/* {transmission === "a" ? "Automatic" : "Manual"} */}
                      {  engine}
                        </p>
                    </div>
                    <div className="car-card__icon">
                        {/* <Image src="/tire.svg" width={20} height={20} alt="seat" /> */}
                        <p className="car-card__icon-text">
                            {power}
                        </p>
                    </div>
                    <div className="car-card__icon">
                        {/* <Image src="/gas.svg" width={20} height={20} alt="seat" /> */}
                        <p className="car-card__icon-text">
                            {type}
                            </p>
                    </div>
                </div>

                <div className="car-card__btn-container">
                    <CustomButton
                        title='View More'
                        containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
                        textStyles='text-white text-[14px] leading-[17px] font-bold'
                        rightIcon='/right-arrow.svg'
                        handleClick={() => setIsOpen(true)}
                    />
                </div>
            </div>

            <MotorDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} motor={motor} />
        </div>
    );
};


export default MotorCard