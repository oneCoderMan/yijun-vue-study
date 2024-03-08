import httpInstanse from "@/utils/http"

export function getCatory() {
    return httpInstanse({
        url: 'home/category/head'
    })
}