import type {
  PackageManager,
  PackageManagerType,
} from '../../node/packageManager'
import { executeAllTasks } from '../../tasks'
import { determineTmpDirectoryTask } from '../../tasks/all/determineTmpDir'
import { fetchTemplateTask } from '../../tasks/all/fetchTemplate'
import { installDependenciesTask } from '../../tasks/all/installDependencies'
import { unzipTemplateTask } from '../../tasks/all/unzipTemplate'
import { verifyDestinationAvailableTask } from '../../tasks/all/verifyDestinationAvailable'
import { verifyPackageManagerAvailableTask } from '../../tasks/all/verifyPackageManagerAvailable'
import type { Template } from '../../template'
import { TmpLocation, tmpLocation } from '../../template/tmp'

export type EjectConfig = {
  packageManager: PackageManagerType
  destination: string
  website: {
    template: Template
    templateVersion: string
  }
}

export type EjectTaskContext = {
  tmpArchive: TmpLocation
  tmpDirectory: TmpLocation
  packageManager: PackageManager
}

export default async function eject(config: EjectConfig) {
  const destination = tmpLocation(config.destination)
  await executeAllTasks<EjectTaskContext>([
    determineTmpDirectoryTask({
      ...config,
      // Slight hack to set the tmp directory to the target location.
      // This speeds up the installation
      tmpDirectory: destination,
    }),
    verifyPackageManagerAvailableTask(config),
    verifyDestinationAvailableTask(config),
    fetchTemplateTask(config),
    unzipTemplateTask(config),
    installDependenciesTask(),
  ])
}
