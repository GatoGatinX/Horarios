import { TaskProvider } from '../../public/context/TaskContext';
import './globals.css'

export const metadata = {
  title: 'Generar Horarios',
  description: 'Generador de Horarios Academicos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <TaskProvider>{children}</TaskProvider>
      </body>
    </html>
  )
}
