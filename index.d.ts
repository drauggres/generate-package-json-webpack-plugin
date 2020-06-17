import { Plugin } from 'webpack';

declare class GeneratePackageJsonPlugin extends Plugin {
  constructor(
    basePackageValues: Record<string, unknown>,
    versionsPackageFilename: string,
    extraOptions?: {
      debug?: boolean;
      extraSourcePackageFilenames?: string[]; },
    );
}

export default GeneratePackageJsonPlugin;
