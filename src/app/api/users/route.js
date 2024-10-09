import { NextResponse } from 'next/server'

export function GET(){
    return NextResponse.json({
        message: 'works!!'
    })
}

export function POST(){
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