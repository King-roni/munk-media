import { AlertCircle, Info, CheckCircle, AlertTriangle } from 'lucide-react'

interface CalloutProps {
  type?: 'info' | 'success' | 'warning' | 'error'
  children: React.ReactNode
}

export function Callout({ type = 'info', children }: CalloutProps) {
  const styles = {
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-900',
      icon: Info,
    },
    success: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      text: 'text-green-900',
      icon: CheckCircle,
    },
    warning: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      text: 'text-yellow-900',
      icon: AlertTriangle,
    },
    error: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      text: 'text-red-900',
      icon: AlertCircle,
    },
  }

  const style = styles[type]
  const Icon = style.icon

  return (
    <div className={`${style.bg} ${style.border} border-l-4 p-4 rounded-r-lg my-6`}>
      <div className="flex items-start space-x-3">
        <Icon className={`${style.text} w-5 h-5 flex-shrink-0 mt-0.5`} />
        <div className={`${style.text} prose prose-sm max-w-none`}>
          {children}
        </div>
      </div>
    </div>
  )
}

