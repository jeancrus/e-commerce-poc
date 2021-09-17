import { useProvider } from 'provider'
import * as S from './styles'

export interface IFullscreenLoaderProps {
  active?: boolean
}

const FullscreenLoader: React.FC<IFullscreenLoaderProps> = ({ active }) => {
  const { state } = useProvider()

  return (
    <S.Loader
      classNamePrefix="MyLoader_"
      active={active || state.loading}
      spinner
      text="Carregando..."
    />
  )
}

export default FullscreenLoader
