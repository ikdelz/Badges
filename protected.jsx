const ProtectedRoute = ({ children }) => {
  const user = useSelector(state => state.user);

  if (!user) {
    return <Redirect to="/" />;
  }

  return children;
};

// Usage in your Router
<ProtectedRoute>
  <YourProtectedComponent />
</ProtectedRoute>
