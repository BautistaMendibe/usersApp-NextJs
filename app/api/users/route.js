import {NextResponse} from "next/server";

export async function GET(){

    const res = await fetch('https://reqres.in/api/users')
    const data = await res.json();
    return NextResponse.json(data);

}

export function POST(){
    return NextResponse.json({
        message: 'Funcion POST'
    });
}