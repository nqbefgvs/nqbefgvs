export interface Line {
    title: string,
    lineId: number,
    color: string
}

export interface LinePosition {
    top: number,
    left: number
}

export interface Item {
    title: string,
    line: number,
    time: number
}

export interface ItemPosition {
    top: number
    left: number
}