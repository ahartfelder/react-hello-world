import React from "react"
import ReactDOM from "react-dom"

const portal = document.getElementById('portal-root')

export default function PortalDemo() {
    return ReactDOM.createPortal(
        <h1>Portals demo</h1>,
        portal
    )
}