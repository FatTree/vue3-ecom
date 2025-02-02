/// <reference types="vite/client" />
import { ComponentCustomProperties } from "vue"

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $t: I18n['global']['t'];
    }
}

interface ImportMetaEnv {
    readonly VITE_API_KEY: string
    readonly VITE_AUTH_DOMAIN: string
    readonly VITE_PROJECT_ID: string
    readonly VITE_STORAGE_BUCKET: string
    readonly VITE_MESSAGING_SENDER_ID: string
    readonly VITE_APP_ID: string
    readonly VITE_MEASUREMENT_ID: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}