import React from "react";

function SvgSass(props) {
  return (
    <svg viewBox="0 0 128 128" width="1em" height="1em" {...props}>
      <path d="M1.2 56.2c0 .7.2 1.2.3 1.6.8 2.9 2.4 5.5 4.3 7.7 2.7 3.3 6.1 5.9 9.6 8.4 3 2.1 6 4.2 9 6.4.5.4 1 .8 1.6 1.2-.5.3-.9.5-1.3.7-4 2-7.8 4.3-11.3 7-2.1 1.6-4.2 3.4-5.6 5.7-2.3 3.7-3.1 7.6-1.4 11.8.5 1.2 1.3 2.3 2.4 3.1.4.3.7.5 1.2.6 1.1.2 2.1.4 3.2.6h3c3.4-.3 6.4-1.4 9.2-3.4 4.3-3 7.2-7 8.5-12.1.9-3.7.9-7.4-.1-11.2-.1-.3-.2-.7-.4-1s-.3-.7-.5-1.1l6.9-4 .1.1c-.1.4-.3.8-.4 1.2-.8 3-1.4 6-1.2 9.1.2 3.3 1.1 6.4 3.1 9.1 1.6 2.2 5.3 2.3 6.9.1.6-.8 1.2-1.6 1.6-2.5 1.1-2.3 2.2-4.7 3.2-7l.2-.4c-.1 1.1-.2 2.1-.2 3.1-.1 1.5 0 3 .5 4.5.4 1.2 1.2 2.2 2.6 2.3 1 .1 1.7-.3 2.5-.9 1.1-.9 2-2 2.7-3.2 1.9-3.5 3.9-7 5.6-10.5 1.9-3.9 3.5-7.9 5.2-11.8l.3-.7c.4 1.6.7 3.2 1.2 4.7.6 1.7 1.4 3.4 2.2 5.1.4.8.3 1.3-.2 1.9-2.3 2.7-4.5 5.5-6.7 8.2-.5.6-1 1.2-1.4 1.9-.2.4-.4.9-.5 1.4-.1.9.4 1.8 1.4 2 .9.2 1.8.3 2.7.2 3.1-.2 5.9-1.3 8.4-3.2 3.2-2.4 4.3-5.6 3.5-9.5-.2-1-.6-2.1-.9-3.1-.2-.5-.2-.8.1-1.2 2.6-3.7 4.8-7.6 6.8-11.6.1-.2.2-.3.3-.5.7 3.4 1.7 6.8 3.4 9.8-.9.9-1.8 1.7-2.6 2.6-1.8 1.9-3.4 4-4.2 6.6-.3 1.1-.6 2.2-.5 3.4.2 1.8 1.7 3 3.5 2.6 3.9-.9 7.2-2.7 9.6-5.9 1.6-2.2 1.8-4.6 1.1-7.1-.2-.7-.4-1.4-.7-2.2 1-.3 1.9-.6 2.8-.9 5-1.1 9.9-.9 14.7.9 2.8 1.1 5.1 2.8 6.4 5.6 1.6 3.4.7 6.6-2.5 8.7l-.9.6c-.2.2-.2.5-.2.7 0 .1.3.3.5.3 1 0 1.9-.6 2.7-1.1 2-1.4 3.5-3.3 3.9-5.8l.1-.2-.1-1.6v-.3c-.4-3.6-2.4-6.5-5.2-8.7-3.3-2.6-7.2-3.6-11.2-3.8-3.3-.1-6.6.4-9.8 1.5-.9.3-1.8.7-2.7 1.1-.1-.2-.3-.4-.4-.6-.9-1.9-2-3.7-2.3-5.9-.2-1.5-.4-3.1 0-4.6.4-1.5.8-2.9 1.2-4.4.2-.7.1-1.2-.6-1.5-.2-.1-.5-.2-.8-.3-1.8-.3-3.5-.1-5.2.4-.6.2-1 .5-1.2 1.2-.1.4-.2.7-.3 1.1-.4 1.6-.8 3.2-1.5 4.6-1.8 3.7-3.8 7.3-5.9 10.9-.2.4-.5.8-.8 1.2-.7-1.5-1.5-2.9-1.8-4.5-.3-1.8-.5-3.7 0-5.5.3-1.4.8-2.7 1.2-4 .2-.6.1-1-.5-1.3-.3-.2-.6-.3-.9-.4-1.8-.3-3.6-.1-5.4.4-.5.2-.8.5-1 1.1-.5 1.7-.9 3.3-1.6 4.9-2.8 6.4-5.6 12.7-8.5 19-.6 1.3-1.3 2.6-2 3.9l-.6.9c-.2-.2-.2-.3-.2-.5 0-.8-.1-1.7.1-2.4.5-2.4 1-4.7 1.6-7.1.5-1.9 1-3.9 1.5-5.8.2-.6.2-1.3-.3-1.8-.8-.9-2.4-1.1-3.4-.4l-.4.2.5-.6c.2-1.5.2-3-.2-4.4-.5-1.8-1.8-2.9-3.7-2.8-.9 0-1.8.2-2.6.5-3.4 1.3-6 3.7-8.3 6.6-.2.3-.5.5-.8.7l-8.7 4.8-3.1 1.6c-.9-.8-1.7-1.7-2.5-2.4-2.7-2.2-5.5-4.4-8.2-6.6-2.4-1.9-4.8-4-6.6-6.6-1.3-1.9-2.2-4-2.3-6.4-.1-3 .8-5.8 2.3-8.4 2-3.3 4.7-5.9 7.6-8.3 3.1-2.5 6.5-4.7 10-6.6 4.9-2.7 9.9-5.2 15.3-6.8 5.5-1.6 11.2-2.6 17-1.9 2.3.3 4.5.8 6.5 1.9 1.6.9 2.8 2 3.4 3.7.6 1.7.6 3.5.2 5.2-.8 3.5-2.8 6.4-5.2 9-4 4.3-8.9 7.2-14.4 9.1-3.2 1.1-6.4 1.8-9.8 2.1-2.7.2-5.4 0-8-1-1.7-.6-3.2-1.6-4.4-3-.2-.2-.5-.5-.9-.3s-.5.6-.3 1c.2.6.4 1.3.8 1.8.9 1.4 2.1 2.4 3.5 3.3 2.6 1.7 5.6 2.2 8.7 2.4 4.6.2 9.2-.5 13.7-1.7 6.4-1.8 11.9-4.9 16.4-9.9 3.7-4.1 6.4-8.8 6.9-14.4.3-2.7 0-5.4-1.3-7.9-1.4-2.7-3.6-4.7-6.3-6.1-3.9-2-8-3.2-12.3-3.2H56c-5.2 0-10.2 1.5-15.1 3.3-3.7 1.3-7.3 2.9-10.9 4.7-7.7 3.8-14.8 8.5-20.7 14.8-3 3.2-5.5 6.7-6.9 10.8-.4 1.2-.8 2.5-1.1 3.7m27.8 36.1c-.3 4.5-2.4 8.1-5.7 11-1.9 1.6-4 2.8-6.5 3.2-.9.1-1.8.2-2.7-.2-1.2-.5-1.5-1.6-1.5-2.8 0-1.9.6-3.6 1.5-5.2 1.2-2.1 2.9-3.7 4.7-5.2 2.9-2.4 6-4.4 9.3-6.2l.2-.1c.6 1.8.9 3.6.7 5.5zM54.3 71c-.2 1.4-.5 2.8-.9 4.2-1.4 4.8-3.3 9.4-5.3 14-.4.8-.9 1.6-1.4 2.4l-.3.3c-.6.6-1.1.5-1.4-.2-.3-.9-.5-1.8-.7-2.7-.1-.6-.1-1.3-.1-1.9 0-4.5 1.4-8.6 3.7-12.4 1-1.6 2-3.1 3.6-4.1.5-.3 1-.6 1.6-.7.8-.2 1.3.2 1.2 1.1zm17.2 21.8l6.2-7.2c.2 2.7-4.4 8.1-6.2 7.2zM91.2 88c-.4.2-.9.4-1.4.7-.4.2-.5 0-.6-.4 0-.2 0-.5.1-.7.8-2.9 2.4-5.4 4.6-7.5l.2-.1c1.1 3.1-.1 6.4-2.9 8z" />
    </svg>
  );
}

export default SvgSass;
