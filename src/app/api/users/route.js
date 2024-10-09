import { NextResponse } from 'next/server'

export async function GET(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return NextResponse.json({data})
}

export async function POST(request){
    const data = await request.json()
    console.log(data);
    
    return NextResponse.json({
        message: 'Crenado datos!!'
    })
}

export function PUT(){
    return NextResponse.json({
        message: 'actualizando datos!!'
    })
}

export function DELETE(){
    return NextResponse.json({
        message: 'eliminando datos!!'
    })
}