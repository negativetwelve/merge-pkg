// Utilities
import mergePkg from '../mergePkg';


describe('mergePkg', () => {
  context('with a single package.json', () => {
    set('package1', () => ({
      name: 'package-1',
      dependencies: {
        mergePkg: '0.0.1',
        react: '16.0.0',
      },
    }));

    it('should return the same package', () => {
      expect(mergePkg(package1)).toEqual(package1);
    });
  });

  context('with two package.jsons', () => {
    context('with different keys', () => {
      set('package1', () => ({
        name: 'package-1',
        dependencies: {
          react: '16.0.0',
        },
      }));

      set('package2', () => ({
        description: 'test package',
        devDependencies: {
          rimraf: '2.6.3',
        },
      }));

      it('should merge all keys', () => {
        expect(mergePkg(package1, package2)).toEqual({
          name: 'package-1',
          description: 'test package',
          dependencies: {
            react: '16.0.0',
          },
          devDependencies: {
            rimraf: '2.6.3',
          },
        });
      });
    });

    context('with multiple dependencies', () => {
      set('package1', () => ({dependencies: {react: '16.0.0'}}));
      set('package2', () => ({dependencies: {rimraf: '2.6.3'}}));

      it('should order dependencies', () => {
        expect(mergePkg(package1, package2)).toEqual({
          dependencies: {
            react: '16.0.0',
            rimraf: '2.6.3',
          },
        });
      });
    });
  });
});
