import React from "react";
import Deco from "../Preview/Deco";
import Button from "./Button";

export default {
    title:'Form/button',
    commponent:Button,
    args:{
        children:'Same'
    }
}
 

export const Primary = ()=> <Deco><Button variant='primary'>Primary</Button></Deco>
export const Secondary = ()=> <Button variant='secondary'>Secondary</Button>
export const Success = ()=> <Button variant='success'>Success</Button>
export const Danger = ()=> <Button variant='danger'>Danger</Button>

/// OR

const Template = ({...args}) =><Deco> <Button {...args}/></Deco>

export const  PrimaryA = Template.bind({});

PrimaryA.args ={
    variant:'primary',
   // children:'PrimaryA'
}

export const SecondaryA = Template.bind({});

SecondaryA.args ={
    ...PrimaryA.args,
   // children:'Secondary'
}
