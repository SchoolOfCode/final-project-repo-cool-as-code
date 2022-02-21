
import {React} from 'react'
import {link} from 'next/link'
import {Button} from 'antd'

export default function MtButton({getMeal, mealTypes}){
return (<Button onClick = {getMeal} type = "submit" value = {mealTypes} />)







}

