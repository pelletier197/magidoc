import { executeAllTasks } from '../../tasks'
import { buildTemplateTask } from '../../tasks/all/buildTemplate'
import { cleanTask } from '../../tasks/all/clean'
import { copyStaticAssetsTask } from '../../tasks/all/copyStaticAssets'
import { determineTmpDirectoryTask } from '../../tasks/all/determineTmpDir'
import { fetchTemplateTask } from '../../tasks/all/fetchTemplate'
import { installDependenciesTask } from '../../tasks/all/installDependencies'
import { loadGraphQLSchemaTask } from '../../tasks/all/loadGraphqlSchema'
import { moveOutputTask } from '../../tasks/all/moveOutput'
import { resolveTemplateConfigurationTask } from '../../tasks/all/resolveTemplateConfig'
import { selectPackageManagerTask } from '../../tasks/all/selectPackageManager'
import { unzipTemplateTask } from '../../tasks/all/unzipTemplate'
import { warnVersionTask } from '../../tasks/all/warnVersion'
import { writeEnvFile } from '../../tasks/all/writeEnvFile'
import type { GenerationConfig } from './config'
import type { GenerateTaskContext } from './task'

export default async function generate(config: GenerationConfig) {
  await executeAllTasks<GenerateTaskContext>([
    warnVersionTask(config),
    determineTmpDirectoryTask(config),
    cleanTask(config),
    selectPackageManagerTask(config),
    fetchTemplateTask(config),
    unzipTemplateTask(config),
    installDependenciesTask(),
    resolveTemplateConfigurationTask(),
    loadGraphQLSchemaTask(config),
    copyStaticAssetsTask(config),
    writeEnvFile(config),
    buildTemplateTask(),
    moveOutputTask(config),
  ])
}
