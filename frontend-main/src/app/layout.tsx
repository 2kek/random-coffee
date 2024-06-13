import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { SITE_DESCRIPTION, SITE_NAME } from '@/constants/seo.constants'
import { Providers } from './providers'
import { Toaster } from 'sonner'
import { Container } from "@chakra-ui/react";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description: SITE_DESCRIPTION
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body className={inter.className}>
				<Providers>
						{children}

						<Toaster
							theme='dark'
							position='bottom-right'
							duration={1500}
						/>
				</Providers>
			</body>
    </html>
  );
}
