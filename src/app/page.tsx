'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'] })


function autoNext(id: number, key: string) {
  document.getElementById(`${id + 1}`)?.focus()
  if (id === 1 && key === "Backspace") {
    document.getElementById('1')?.focus()
  } else if (key === "Backspace") {
    document.getElementById(`${id - 1}`)?.focus()
  }

  const focusedElement = document.getElementById(`${id}`) as HTMLInputElement
  let content = focusedElement.value
  if (typeof content === 'string' && content?.length > 1) {
    if (id !== 1) {
      content = content.slice(0, (5- id))
    }
    const number1 = content.slice(0, 1)
    const number2 = content.slice(1, 2)
    const number3 = content.slice(2, 3)
    const number4 = content.slice(3, 4)

    const inputArray = [number1, number2, number3, number4];

    for (let i = 0; i < inputArray.length; i++) {
      const element = inputArray[i];
      if (id <= 4) {
        const input = document.getElementById(`${id}`) as HTMLInputElement
        input.value = element
      }
      
      id++
      document.getElementById(`${id}`)?.blur()
    }

  }
}

export default function Home() {
  return (
    <main className='flex justify-center'>
      <form className={nunito.className} >
        <div className='outer-border w-96 border-[solid] border rounded-[25px] border-[#DFDFDF] p-10 flex justify-center mt-2.5'>
          <div className='flex flex-col w-80'>
            <div className='flex flex-col items-center mb-12'>
              <Image src="/assets/icons/schoolar-logo.svg" alt='Logo' width={170} height={44}></Image>
              <Image src="/assets/icons/schoolar-arrow.svg" alt='' width={22} height={6} className='ml-[-20px]'></Image>
            </div>
            <p className=' text-black text-3xl font-bold mb-7 text-center'>Verify your account</p>
            <p className=' text-black font-light text-center mb-12'>A verification code has been sent to codewi*****@gmail.com.</p>
            <div className='mb-12 w-[290px] flex self-center'>
              <input type="number" className='input-otp' name='otp' id='1' onKeyUp={(event) => autoNext(1, event.key)}/>
              <input type="number" className='input-otp' name='otp' id='2' onKeyUp={(event) => autoNext(2, event.key)}/>
              <input type="number" className='input-otp' name='otp' id='3' onKeyUp={(event) => autoNext(3, event.key)}/>
              <input type="number" className='input-otp' name='otp' id='4' onKeyUp={(event) => {
                if (event.key === "Backspace") {
                  document.getElementById('3')?.focus()
                }
                document.getElementById('4')?.blur()
              }}/>
            </div>
            <button className='h-12 w-80 border-[none] rounded-[100px] bg-[linear-gradient(to_right,_#1E90FF,_#990099)] text-[white] text-md cursor-pointer justify-self-center mb-7 '>Verify</button>
            <Link href='#' className='text-sm font-semibold text-[#1E90FF] mb-20 '>Try Another Way</Link>
            <div className='text-sm flex justify-between'>
              <p className="text-black">Don't have an account yet?</p>
              <Link href='?' className='text-[#1E90FF]'>Register</Link>
            </div>
          </div>
        </div>
      </form>
    </main>
    

  )
}
