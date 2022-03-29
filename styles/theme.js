import { theme as chakraTheme } from '@chakra-ui/core'
import { Icon, createIcon } from '@chakra-ui/react'

const theme = {
    ...chakraTheme,
    fonts: {
        ...chakraTheme.fonts,
        body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    },
    fontWeights: {
        normal: 400,
        medium: 600,
        bold: 800,
    },
    icons: {
        ...chakraTheme.icons,
        logo: {
            path: (
                <g
                    fill="currentColor"
                // stroke="currentColor"
                // strokeWidth="2"
                // strokeLinecap="round"
                // strokeLinejoin="round"
                >
                    <path d="M250.67 223.375c72.047-29.24 38.155-131.253 2.71-101.417-50.632 42.62 97.461 99.102 89.475 182.294-.749 7.798-3.404 17.003-10.846 21.824-70.788 45.866-169.674-25.528-139.633-57.769 39.997-42.926 127.484 35.328 164.035 52.634 31.91 15.109 63.683 21.824 98.964 21.824" />
                </g>
            ),
            viewBox: "0 0 640 480"
        }
    }
}

export default theme;