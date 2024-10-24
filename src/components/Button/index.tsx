interface ButtonProps {
  text: string;
}

export function Button(props: ButtonProps) {
  return (
    <button
      className='w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200 '
    >
      {props.text}
    </button>
  )
}
