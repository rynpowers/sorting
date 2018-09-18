describe('Sort', () => {
  describe('merge', () => {
    let arr1 = [1, 2, 5, 6];
    let arr2 = [0, 3, 4];
    let sorted;
    beforeEach(() => {
      sorted = merge(arr1, arr2);
    });

    afterEach(() => {
      arr1 = [1, 2, 5, 6];
      arr2 = [0, 3, 4];
    });

    it('should merge empty arrays to one empty array', () => {
      expect(merge([], [])).toEqual([]);
    });

    it('should merge unbalanced arrays', () => {
      expect(merge([], [1])).toEqual([1]);
      expect(sorted).toEqual([0, 1, 2, 3, 4, 5, 6]);
    });
  });

  describe('mergeSort', () => {
    let array;
    beforeEach(() => {
      array = [5, 6, 3, 2, 1, 0, 4];
      spyOn(window, 'merge').and.callThrough();
    });

    it('should return an array', () => {
      expect(Array.isArray(mergeSort(array))).toEqual(true);
    });

    it('should sort an empty array', () => {
      expect(mergeSort([])).toEqual([]);
    });

    it('should sort an array of length 1', () => {
      expect(mergeSort([1])).toEqual([1]);
    });

    it('should sort odd arrays', () => {
      expect(mergeSort(array)).toEqual([0, 1, 2, 3, 4, 5, 6]);
    });

    it('should call merge', () => {
      mergeSort(array);
      expect(window.merge).toHaveBeenCalled();
    });

    it('should call merge correct number of times', () => {
      mergeSort(array);
      expect(window.merge).toHaveBeenCalledTimes(6);
    });

    it('should call merge with the correct arguments', () => {
      mergeSort(array);
      expect(window.merge).toHaveBeenCalledWith([6], [3]);
      expect(window.merge).toHaveBeenCalledWith([5], [3, 6]);
      expect(window.merge).toHaveBeenCalledWith([0], [4]);
      expect(window.merge).toHaveBeenCalledWith([2], [1]);
      expect(window.merge).toHaveBeenCalledWith([1, 2], [0, 4]);
      expect(window.merge).toHaveBeenCalledWith([3, 5, 6], [0, 1, 2, 4]);
    });
  });
});
