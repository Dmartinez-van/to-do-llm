'use client'
import { AppShell, Group } from '@mantine/core'
import { GiMouthWatering } from 'react-icons/gi'
import { BsChatLeftTextFill } from 'react-icons/bs'

export default function Home() {
  return (
    <>
      <AppShell header={{ height: 60 }} footer={{ height: 110 }} padding="md">
        <AppShell.Header>
          <Group h="100%" px="md">
            <div className="flex p-2 items-center justify-center w-fit h-fit bg-orange-800 rounded-full">
              <GiMouthWatering size={30} />
            </div>
          </Group>
        </AppShell.Header>

        <AppShell.Main>Tasks should appear here</AppShell.Main>
        <AppShell.Footer
          className="flex justify-end items-center"
          withBorder={false}
        >
          <div className="rounded-full m-4 hover:bg-orange-600 active:bg-orange-700 focus:outline-none focus:ring focus:ring-orange-300">
            <BsChatLeftTextFill size={60} className="m-2 p-1 " />
          </div>
        </AppShell.Footer>
      </AppShell>
    </>
  )
}
