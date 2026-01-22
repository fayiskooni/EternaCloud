const GradientDivider = () => {
  return (
    <div className="w-1/2 flex justify-center mt-10">
      <div className="relative w-[80%] h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent">
        <div className="absolute inset-0 blur-md bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-60" />
      </div>
    </div>
  );
};

export default GradientDivider;
