import 'electron'

declare module 'electron' {
    interface WebContents {
        getWebPreferences(): WebPreferences
        // correct the declaration
        on(event: 'did-start-navigation', listener: (
            ev: Event,
            url: string,
            isInPlace: boolean,
            isMainFrame: boolean,
            frameProcessId: number,
            frameRoutingId: number) => void): this

        removeListener(event: 'did-start-navigation', listener: (
            ev: Event,
            url: string,
            isInPlace: boolean,
            isMainFrame: boolean,
            frameProcessId: number,
            frameRoutingId: number) => void): this
    }
    interface App {
        EXTENSION: {

            showAbout(): void
            registerBrowserWindowEvent(windowId: number, event: string[]): void

        }
    }

    // interface WebPreferences {
    //     preloadURL?: string
    //     nodeConfig?: NodeConfig
    // }
}


