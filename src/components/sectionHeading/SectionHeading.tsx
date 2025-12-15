
interface HeadProps{
    text:string,
    addClass:string

}
const SectionHeading = ({text, addClass}:HeadProps) => {
  return (
    <p className={`text-4xl font-sam uppercase${addClass}`}>|| {text} || </p>
  )
}

export default SectionHeading