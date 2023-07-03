/**
 * 项目信息的显示设置
 */
export interface ProjectDisplayOptions {
  officialList?: boolean
  hidden?: boolean
  name?: string
  authors?: string[]
  keywords?: string[]
  requirements?: Record<string, Record<string, string>>
}
