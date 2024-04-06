function Admin() {
  return (
    <form className="min-h-screen" onSubmit={""}>
      <label className="form-control py-3 my-2 w-full max-w-xs">
        <div className="label">
          <span className="label-text">Email</span>
          {/* <span className="label-text-alt">Top Right label</span> */}
        </div>
        <input
          type="email"
          placeholder="Johndoe@gmail.com"
          className="input input-bordered w-full max-w-xs"
          //   value={name}
          //   onChange={(e) => {
          //     setName(e.target.value);
          //   }}
        />
        {/* <div className="label">
      <span className="label-text-alt">Bottom Left label</span>
      <span className="label-text-alt">Bottom Right label</span>
    </div> */}
      </label>
      <label className="form-control py-3 my-2 w-full max-w-xs">
        <div className="label">
          <span className="label-text">Password</span>
          {/* <span className="label-text-alt">Top Right label</span> */}
        </div>
        <input
          type="password"
          className="input input-bordered w-full max-w-xs"
        />
        {/* <div className="label">
      <span className="label-text-alt">Bottom Left label</span>
      <span className="label-text-alt">Bottom Right label</span>
    </div> */}
      </label>
      <button className="btn btn-accent mt-3 py-2 px-8">Login</button>
    </form>
  );
}

export default Admin;
