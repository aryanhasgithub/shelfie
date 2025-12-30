import {BooksContext} from "../contexts/BooksContext";
import { useContext } from "react"
export function useBooks() {
    const context = useContext(BooksContext)
    if (!context) {
        throw new Error("useBooks Must be used within a BooksProvider")
    }
    return context
}