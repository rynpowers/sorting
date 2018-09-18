describe('bubble sort', () => {
  let arr = [5, 4, 3, 2, 1];
  beforeEach(() => {
    spyOn(window, 'swap').and.callThrough();
    arr = bubbleSort(arr);
  });

  afterEach(() => {
    arr = [5, 4, 3, 2, 1];
  });

  it('should return an object of type array', () => {
    expect(Array.isArray(arr)).toEqual(true);
  });

  it('should sort an array with no items', () => {
    expect(bubbleSort([]).length).toEqual(0);
  });

  it('should sort an array with one item', () => {
    expect(bubbleSort([1]).length).toEqual(1);
  });

  it('should call swap', () => {
    expect(window.swap).toHaveBeenCalled();
  });

  it('should sort an array with more than one item', () => {
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });
  it('should call swap the correct number of times', () => {
    expect(window.swap).toHaveBeenCalledTimes(10);
    bubbleSort([2, 1]);
    expect(window.swap).toHaveBeenCalledTimes(11);
    bubbleSort([3, 2, 1]);
    expect(window.swap).toHaveBeenCalledTimes(14);
  });
});
